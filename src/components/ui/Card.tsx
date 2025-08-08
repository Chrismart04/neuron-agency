import React from "react";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}
