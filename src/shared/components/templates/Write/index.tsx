import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "shared/components/atoms/Buttons";
import { api } from "shared/infra/services/api";
import { Content, Title, WriteContainer } from "./styles";

const NoSSREditor = dynamic(() => import("react-quill"), {
  ssr: false,
});

interface IWriteProps {
  entity?: PostEntity;
}

const Write = ({ entity }: IWriteProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const emptyQuillDefault = "<p><br></p>";
  const isAllowedToPost = !!title && !!content && content !== emptyQuillDefault;

  useEffect(() => {
    if (entity) {
      setTitle(entity.title);
      setContent(entity.content);
    }
  }, [entity]);

  async function handleCreatePost(
    event: FormEvent<HTMLFormElement>,
    title: string,
    content: string
  ) {
    event.preventDefault();

    try {
      let response;

      if (!entity) {
        response = await api.post("post", { title, content });
      }

      if (entity) {
        response = await api.patch(`post/${entity.id}`, { title, content });
      }

      if (response?.data.id) {
        router.push(`post/${response.data.id}`);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:26 ~ Write ~ error", error);
    }
  }

  return (
    <WriteContainer onSubmit={(e) => handleCreatePost(e, title, content)}>
      <Title>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          maxLength={64}
        />
      </Title>

      <Content>
        <NoSSREditor theme="snow" value={content} onChange={setContent} />
      </Content>

      <Button disabled={!isAllowedToPost} btnType="success" type="submit">
        Publish
      </Button>
    </WriteContainer>
  );
};

export { Write };
