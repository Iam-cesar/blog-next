import { api } from "shared/infra/services/api";

export const createPost = async ({ title, content }: Partial<PostEntity>) => {
  try {
    await api.post("/post", { title, content });
  } catch (error: any) {
    console.log(
      "🚀 ~ file: index.tsx:29 ~ createPost ~ error.response.data.message",
      error.response.data.message
    );
  }
};

export const updatePost = async (
  id: string,
  { title, content, published }: Partial<PostEntity>
) => {
  try {
    await api.patch(`/post/${id}`, {
      title,
      content,
      published,
    });
  } catch (error: any) {
    console.log(
      "🚀 ~ file: index.tsx:46 ~ error.response.data.message",
      error.response.data.message
    );
  }
};

export const deletePost = async (id: string) => {
  try {
    await api.delete(`/post/${id}`);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: index.tsx:54 ~ deletePost ~ error.response.data.message",
      error.response.data.message
    );
  }
};
