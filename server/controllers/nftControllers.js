const Nft = require('../models/NftModel')
const User = require('../models/UserModel')
const uploadNft = async (req, res) => {
    console.log(req.body)
    console.log("==========================================")
    let { 
        name, 

        description, 
        price, 
        pic, 
        userData 
        } = req.body;


    price = Number(price)

    const userInfo = userData
    console.log('================================================================================================')

        console.log(userData)
    const creator = userInfo._id
console.log(creator)
    try {
      console.log('valid')

        let post = await Nft.create({ name, description, price, pic, creator })
        console.log(post)
        res.json({ post })

    } catch (err) {
        res.status(203)
    }
}

const catalogNft = async (req, res) => {

    const nftList = await Nft.find().sort({_id: -1})
    res.json(nftList)
}
const detailsNft = async (req, res) => {

    const nftId = req.params.id
    const data = await Nft.findById(nftId)

    res.json(data)
}
const editNft = async (req, res) => {

    const nftId = req.params.id
    const data = req.body
    console.log(data)

    Nft.findByIdAndUpdate(nftId, {
        name: data.name,
        description: data.description,
        price: data.price,
        pic: data.pic
    }, function (err, docs) {
        if (err) {
            console.log(err)
            res.status = 203
        } else {
            console.log("Updated nft: " + docs);
            res.status = 200
        }
    })
    res.json()
}
const deleteNft = async (req, res) => {

    const nftId = req.params.id
    Nft.findByIdAndDelete(nftId, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log("Deleted: " + docs)
        }
    })
    res.status = 200
    res.json()
}

const likeNft = async (req, res) => {

    const user = req.params.usernames
    const nftId = req.params.id

    const nftData = await Nft.findOne({ _id: nftId }).lean()

    if (nftData.likes.includes(user)) {
        const responce = await Nft.findOneAndUpdate({ _id: nftId }, { $pull: { likes: user } }).lean();
        await User.findOneAndUpdate({ username: user }, { $pull: { likedNft: nftId } }).lean();
        res.status = 200
        res.json({responce})

    } else {
        const responce = await Nft.findOneAndUpdate({ _id: nftId }, { $push: { likes: user } }).lean();
        await User.findOneAndUpdate({ username: user }, { $push: { likedNft: nftId } }).lean();
        res.status = 200
        res.json(responce)
    }

}
const ownNft = async (req, res) => {

    const user = req.params.usernames
    const nftId = req.params.id
    const nftUrl = req.body.picUrl.toString()

    const userData = await User.findOne({ username: user }).lean()
    const nftData = await Nft.findOne({ _id: nftId }).lean()

    if (userData.ownedNft.includes(nftUrl) && nftData.owners.includes(user)) {
        await User.findOneAndUpdate({ username: user }, { $pull: { ownedNft: nftUrl } }).lean();
        await Nft.findOneAndUpdate({ _id: nftId }, { $pull: { owners: user } }).lean();

        res.status = 200
        res.json()
    } else {
        await User.findOneAndUpdate({ username: user }, { $push: { ownedNft: nftUrl } }).lean();
        await Nft.findOneAndUpdate({ _id: nftId }, { $push: { owners: user } }).lean();

        res.status = 200
        res.json()
    }
}

const latestNft = async (req, res) => {

    if(req.params) {
        const count = Number(req.params.count)
        const nftList = await Nft.find().sort({price: -1}).limit(count)

        res.json(nftList)
    }
}
const mostWantedNft = async (req,res) => {

    const nftList = await Nft.find().sort({price: -1})

    res.status = 200
    res.json(nftList)
}

const getNftUrl = async (req, res) => {
    const url = req.body.url
    const data = await Nft.findOne({pic: url}).lean()
    if(data) { res.json(data) }
}
module.exports = {getNftUrl, uploadNft, catalogNft, detailsNft, editNft, deleteNft, likeNft, ownNft, latestNft, mostWantedNft}