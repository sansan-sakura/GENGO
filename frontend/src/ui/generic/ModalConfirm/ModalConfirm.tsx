import { Dialog, DialogContent, DialogHeader } from "../../shadcn/Dialog";
import { useRecoilState } from "recoil";

import { Button } from "../../shadcn/Button";
import { modalConfirmState } from "../../../states/atoms/commonAtoms";

type Props = {
  onClick?: () => void;
  header?: string;
};

export const ModalConfirm = ({ onClick, header }: Props) => {
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useRecoilState(modalConfirmState);
  return (
    <Dialog
      open={isOpenModalConfirm}
      onOpenChange={() => {
        setIsOpenModalConfirm((prev) => !prev);
      }}
    >
      <DialogContent>
        <DialogHeader className="text-lg mb-10 text-center font-semibold">{header}</DialogHeader>
        <div className="flex justify-center gap-2">
          <Button variant="outline" onClick={() => setIsOpenModalConfirm(false)}>
            Cancel
          </Button>
          <Button onClick={onClick} variant="default">
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
