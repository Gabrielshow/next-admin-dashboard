import React, { useState } from 'react';

interface SidebarComponentProps {
  icon: React.ReactNode;
  text: string;
  dropdown?: React.ReactNode[]; // Directly use an array of React nodes
  onClick: () => void;
  active: boolean; // Track if this component is active
  isOpen: boolean; // Track if dropdown is open (for subitems toggle)
  handleSubSectionClick?: (path: string) => void; // Function to handle click on subitems (for navigation)
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({
  icon,
  text,
  dropdown = [],
  onClick,
  active,
  isOpen,
  handleSubSectionClick, // Accept the function as a prop
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track the hovered subitem index
  const [clickedIndex, setClickedIndex] = useState<number | null>(null); // Track the clicked subitem index

  return (
    <div className={`${active || isOpen ? 'border-gradient' : ''}`}>
      {/* Parent Item (e.g., Analytics) */}
      <div
        className={`flex items-center justify-between p-3 border border-transparent group ${
          active ? 'bg-[#2d2d2d]' : ''
        }`}
        onClick={onClick}
      >
        <div className="flex flex-row items-center gap-2">
          {icon}
          {text}
        </div>
      </div>

      {/* Submenu / Dropdown (only visible if isOpen is true) */}
      {isOpen && (
        <div className="ml-4 pl-4 border-[#2d2d2d]">
          <div className="flex flex-col gap-2">
            {/* Directly map dropdown items and apply styles */}
            {dropdown.map((child, index) => (
              <div
                key={index}
                className={`p-2 cursor-pointer ${
                  hoveredIndex === index || clickedIndex === index ? 'bg-black' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)} // Track the index on hover
                onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
                onClick={() => {
                  setClickedIndex(index); // Track the index on click
                  // Ensure that child is a string before calling handleSubSectionClick
                  if (handleSubSectionClick && typeof child === 'string') {
                    handleSubSectionClick(child); // Only call if it's a string
                  }
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hover effect: Border gradient */}
      <style jsx>{`
        .group:hover {
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1;
        }

        /* Gradient border when the parent is active or open */
        .border-gradient {
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1;
        }
      `}</style>
    </div>
  );
};

export default SidebarComponent;
