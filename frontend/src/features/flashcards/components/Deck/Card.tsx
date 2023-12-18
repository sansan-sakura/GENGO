import { CategoryLabel } from "../Category/CategoryLabel";
import { DeckType } from "../../../../types/flashcardTypes";
import { Link } from "react-router-dom";
import { EditBtn } from "../../../../ui/EditBtn";
import { useState } from "react";
import { Modal } from "../../../../ui/Modal";
import { EditDeckModal } from "./EditDeckModal";
import { DeleteBtn } from "../../../../ui/DeleteBtn";
import { useDeleteDeck } from "../../hooks/deck/useDeleteDeck";
import { Toaster } from "react-hot-toast";

const bgColors = [
  "bg-red-light",
  "bg-yellow-light",
  "bg-green-dark",
  "bg-blue-light",
  "bg-blue-default",
  "bg-green-light",
];

export const Card = ({ card, index }: { card: DeckType; index: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteDeck } = useDeleteDeck();

  const handelDeleteDeck = () => {
    if (card._id === undefined) return;
    const confirmDelete = confirm("Are you sure to delete this deck?");
    if (!confirmDelete) return null;
    deleteDeck(card._id);
  };

  return (
    <div className="relative">
      <Toaster />
      <div className="bg-yellow-default text-white w-5 h-10 transition ease duration-100 hover:brightness-95 absolute top-5 -right-5 z=10 flex justify-center items-center rounded-tr-md rounded-br-md">
        <EditBtn handleEdit={() => setIsModalOpen(true)} color="#fff" size="16px" />
      </div>
      <div className="bg-red-default text-white w-5 h-10 transition ease duration-100 hover:brightness-95 absolute bottom-16 -right-5 z=10 flex justify-center items-center rounded-tr-md rounded-br-md">
        <DeleteBtn handleDelete={handelDeleteDeck} color="#fff" size="16px" />
      </div>
      <Link
        to={`/deck/${card._id}`}
        className="group relative block h-32 w-56 sm:h-44 sm:w-[360px]"
      >
        <span
          className={`absolute inset-0 border-2 border-dashed border-black ${bgColors[index]} rounded-lg`}
        ></span>

        <div className="relative h-full transform border-2 border-black bg-white  rounded-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 transition-opacity sm:p-6 lg:p-4 h-full flex flex-col justify-between">
            {card.category && <CategoryLabel category={card?.category?.category} bgColor="" />}
            <h2 className="text-xl font-medium sm:text-2xl">{card.title}</h2>
            <div className="flex justify-between">
              <small>{card?.cards?.length} cards</small>
              <small>created at: {card.createdAt.toString().split("T")[0]}</small>
            </div>
          </div>
        </div>
      </Link>
      {isModalOpen && (
        <Modal
          content={
            <EditDeckModal id={card._id} title={card.title} category={card?.category?.category} />
          }
          setIsOpenModal={setIsModalOpen}
        />
      )}
    </div>
  );
};
