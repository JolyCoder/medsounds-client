import { FC, useCallback, useState } from "react";
import { Button } from "../Button/Button";
import { ArrowRight } from "../../icons/ArrowRight";
import { SuggestModalContainer } from "./components/SuggestModal/SuggestModal";

export const SuggestButton: FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

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

      <SuggestModalContainer open={modalOpened} onCloseRequest={handleClose} />
    </>
  );
};
