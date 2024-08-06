interface ShopCategoryProps {
  category: string;
  onSelectCategory: (categ: string) => void;
  activeCateg: string;
}

export const ShopCategory = ({
  category,
  activeCateg,
  onSelectCategory,
}: ShopCategoryProps) => {
  function handleClickCategory(categ: string) {
    onSelectCategory(categ);
  }

  return (
    <li>
      <button
        className={`${
          activeCateg === category ? 'opacity-100 font-medium' : ' opacity-50 '
        } hover:opacity-100 text-lg duration-200`}
        onClick={() => handleClickCategory(category)}
      >
        {category}
      </button>
    </li>
  );
};
