
import React from 'react';

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-1)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

const Loading: React.FC = () => {
  // Posicionando o spinner no centro da área disponível
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--gap)" }}>
      <div style={style}></div>
    </div>
  );
};

export default Loading;