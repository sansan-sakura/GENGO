import { useRecoilState } from "recoil";
import { Button } from "../../shadcn/Button";
import { modalConfirmState, modalIDstate } from "../../../states/atoms/commonAtoms";
import { useEffect } from "react";

type Props = {
  text: string;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "link" | "outline" | "default" | "secondary" | "destructive" | "ghost";

  isLoading?: boolean;
};
export const ButtonSubmit = ({
  text,
  size = "default",
  variant = "secondary",
  onClick,
  isLoading,
}: Props) => {
  const [modalId, setMdoalId] = useRecoilState(modalIDstate);
  const [modalConfirmId, setModalConfirmId] = useRecoilState(modalConfirmState);

  useEffect(() => {
    if (!isLoading) return;
    const closeModalOnSubmit = () => {
      console.log(modalId, modalConfirmId);
      modalConfirmId && setModalConfirmId(false);
      modalId !== "" && setMdoalId("");
    };
    closeModalOnSubmit();
  }, [onClick, isLoading, modalConfirmId, modalId, setModalConfirmId, setMdoalId]);
  return (
    <Button size={size} variant={variant} onClick={onClick} className="mx-auto uppercase">
      {text}
    </Button>
  );
};
