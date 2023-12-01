// ProjectsCards.tsx
import React from 'react';

interface ProjectsCardsProps {
  title: string;
  imageSrc: string;
  category: string;
  index: number;
  customClass?: string;
  imageClass?: string;
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ title, imageSrc, category, index, customClass, imageClass }) => {
  return (
    <>
      <section className={`rounded-lg border-2 border-black relative h-[370px] ${customClass}`}>
        <img src={imageSrc} alt={title} className={`w-full h-[280px] object-cover rounded-t-lg ${imageClass}`} />
        <div className="w-full px-8 flex flex-col justify-center text-white row-start-2">
          <h3 className="text-xl font-bold leading-5">{title}</h3>
          <p className="text-xl font-medium text-[#888]">{category}</p>
        </div>
      </section>
    </>
  );
};

export default ProjectsCards;
