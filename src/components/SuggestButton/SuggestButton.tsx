import { FC, useCallback, useState } from "react";
import { Button } from "../Button/Button";
import { ArrowRight } from "../../icons/ArrowRight";
import { SuggestModalContainer } from "./components/SuggestModal/SuggestModal";

export const SuggestButton: FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClose = useCallback(() => {
    setModalOpened(false);
  }, [setModalOpened]);

  return (
    <>
      <Button
        title="Предложить"
        icon={<ArrowRight />}
        onClick={() => setModalOpened(true)}
      />

      <SuggestModalContainer
        name={name}
        onNameChange={setName}
        email={email}
        onEmailChange={setEmail}
        content={content}
        onContentChange={setContent}
        open={modalOpened}
        onCloseRequest={handleClose}
      />
    </>
  );
};
