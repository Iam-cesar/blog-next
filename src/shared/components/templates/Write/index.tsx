import dynamic from "next/dynamic";
import { FormEvent, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "shared/components/atoms/Buttons";
import { api } from "shared/infra/services/api";
import { Container, Content, Title } from "./styles";

const NoSSREditor = dynamic(() => import("react-quill"), {
  ssr: false,
});

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const emptyQuillDefault = "<p><br></p>";
  const isAllowedToPost = !!title && !!content && content !== emptyQuillDefault;

  async function handleCreatePost(
    event: FormEvent<HTMLFormElement>,
    title: string,
    content: string
  ) {
    event.preventDefault();

    try {
      await api.post("post", { title, content });

      setTitle("");
      setContent("");
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:26 ~ Write ~ error", error);
    }
  }

  return (
    <Container onSubmit={(e) => handleCreatePost(e, title, content)}>
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
    </Container>
  );
};

export { Write };
