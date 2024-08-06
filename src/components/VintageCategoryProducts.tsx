import { vintageCategory } from '../constants/data.ts';

type VintageCategoryProductsProps = {
  onChangeCategory: (categ: string) => void;
  activeCateg: string;
};

export const VintageCategoryProducts = ({
  onChangeCategory,
  activeCateg,
}: VintageCategoryProductsProps) => {
  function handleClick(categ: string) {
    onChangeCategory(categ);
  }

  return (
    <ul className="font-sans flex flex-wrap gap-x-8 gap-y-4 sm:gap-8 pt-4 px-6 sm:px-0">
      {vintageCategory.map(categ => (
        <li key={categ.id} className="relative text-sm">
          <button
            className={`uppercase ${
              activeCateg === categ.type
                ? 'opacity-100 before:bg-secundary-light before:bg-opacity-70'
                : 'opacity-50'
            } pl-6 tracking-wide before:absolute before:top-[0.22rem] before:left-0 before:border-2 before:p-[0.33rem] before:border-secundary-light before:rounded-full font-medium duration-200 hover:opacity-100`}
            onClick={() => handleClick(categ.type)}
          >
            {categ.type}
          </button>
        </li>
      ))}
    </ul>
  );
};
