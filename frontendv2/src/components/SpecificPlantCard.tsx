import React from "react";

const SpecificPlantCard = () => {
  return (
    <div className="specific-plant-card">
      <img src="https://picsum.photos/250/200" alt="" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        reiciendis aperiam dolorum ducimus, natus laboriosam voluptatum ab
        repudiandae nam, error inventore exercitationem et consequatur obcaecati
        incidunt atque cumque aut architecto. Harum dicta assumenda soluta nemo
        sit magnam quis dignissimos tempore quidem officiis culpa praesentium
        iure, asperiores temporibus doloribus. Veniam amet dolor nulla eum
        libero. Tenetur sunt repellendus aperiam optio deserunt?
      </p>
      <div className="specific-plant-card-status-watered">
        <p>Last time watered (21 hours ago, next time in 15 hours)</p>
      </div>
    </div>
  );
};

export default SpecificPlantCard;
