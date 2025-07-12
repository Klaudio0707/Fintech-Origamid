// src/Components/InfoBox.tsx
import React from 'react';

interface InfoBoxProps {
  message: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ message }) => {
  return (
    <div className="box" style={{ padding: "var(--gap)", textAlign: "center" }}>
      <p style={{ color: "var(--color-2)" }}>{message}</p>
    </div>
  );
};

export default InfoBox;