export interface UserModel {
    
    _id: string;
    username: string;
    email: string;
    birthday: string;
    password: string;
    pic: string;
    __v: number;
    bio: string;
    ownedNft: string[];
    likedNft: string[];
}
export interface CommentModel {
    text: string;
    author: string;
    pic: string;
}