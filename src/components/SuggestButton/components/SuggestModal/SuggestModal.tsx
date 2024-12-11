import { FC, useState, useRef } from "react";
import { createPortal } from "react-dom";

import styles from "./SuggestModal.module.css";
import { Button } from "../../../Button/Button";

export type SuggestModalProps = {
  name: string;
  onNameChange: (name: string) => void;

  email: string;
  onEmailChange: (email: string) => void;

  content: string;
  onContentChange: (content: string) => void;

  open: boolean;
  onCloseRequest: () => void;
};

export const SuggestModalContainer: FC<SuggestModalProps> = ({
  open,
  ...restProps
}) => {
  const [rootElement] = useState(document.getElementById("root"));

  if (!rootElement || !open) {
    return null;
  }

  console.log(rootElement, open);

  return createPortal(
    <SuggestModal onSubmit={restProps.onCloseRequest} {...restProps} />,
    rootElement
  );
};

export const SuggestModal: FC<
  Omit<SuggestModalProps, "open"> & { onSubmit: () => void }
> = ({
  name,
  onNameChange,
  email,
  onEmailChange,
  content,
  onContentChange,
  onCloseRequest,
  onSubmit,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handlePortalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("here");
    if (!modalRef) {
      return;
    }

    if (!(event.target as HTMLDivElement).closest(`.${styles.modal}`)) {
      onCloseRequest?.();
    }
  };

  return (
    <div className={styles.portal} onClick={handlePortalClick}>
      <div className={styles.modal} ref={modalRef}>
        <span className={styles.header}>Предложить новость</span>

        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Ваше имя</label>

            <input
              type="text"
              className={styles.input}
              value={name}
              onChange={(event) => onNameChange(event.target.value)}
              placeholder="Введите ваше имя"
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Ваша почта</label>

            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              placeholder="Введите вашу электронную почту"
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              Ваша предложенная новость
            </label>

            <textarea
              className={styles.input}
              value={content}
              onChange={(event) => onContentChange(event.target.value)}
              placeholder="Введите текст вашей новости"
            />
          </div>
        </div>

        <Button title="Отправить" onClick={onSubmit} />
      </div>
    </div>
  );
};
