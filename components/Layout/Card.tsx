"use client";
import React from "react";

const Card = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 w-full mb-8 ${className}`} // Reduced padding
    >
      <h3 className="text-base font-semibold mb-3">{title}</h3> {/* Adjusted font size and margin */}
      {children}
    </div>
  );
};

export default Card;