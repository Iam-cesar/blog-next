export {};

interface IAuthor {
  id: string;
  firstName: string;
  lastName: string;
}

interface ICategory {
  id: string;
  name: string;
}

declare global {
  export type UserEntity = {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    password: string;
    deleted: boolean;
    deletedAt: string | Date;
    createdAt: string | Date;
    updatedAt: string | Date;
    hashedRefreshToken: string;
    role: string;
    like: object | null;
    post: object | null;
    profile: object | null;
  };

  export type RoleEntity = {
    id: string;
    name: string;
    canCreatePost: boolean;
    canUpdatePost: boolean;
    canDeletePost: boolean;
    canSoftDeletePost: boolean;
    canCreateUser: boolean;
    canUpdateUser: boolean;
    canDeleteUser: boolean;
    canSoftDeleteUser: boolean;
    canLikeUser: boolean;
    canLikePost: boolean;
    user: UserEntity[];
    createdAt: string | Date;
    updatedAt: string | Date;
  };

  export type ProfileEntity = {
    id: string;
    bio: string;
    userId: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  };

  export type PostEntity = {
    id: string;
    title: string;
    content: string;
    published: boolean;
    category: ICategory[];
    authorId: string;
    author: IAuthor;
    like: LikeEntity[];
    deleted: boolean;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
  };

  export type LikeEntity = {
    id: string;
    commentId: string;
    postId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };

  export type CommentEntity = {
    id: string;
    content: string;
    postId: string;
    like: LikeEntity[];
    createdAt: Date;
    updatedAt: Date;
  };

  export type CategoryEntity = {
    id: string;
    name: string;
    post: PostEntity;
    createdAt: Date;
    updatedAt: Date;
  };
}
