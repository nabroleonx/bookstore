import React from 'react';

interface BadgeProps {
  text: string;
  bgColor: string;
  textColor: string;
  fontSize?: string;
  fontWeight?: string;
  paddingX?: string;
  paddingY?: string;
  borderRadius?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  bgColor,
  textColor,
  fontSize = '12px',
  fontWeight = 'bold',
  paddingX = '8px',
  paddingY = '4px',
  borderRadius = '4px',
}) => {
  const badgeStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: bgColor,
    color: textColor,
    fontSize,
    fontWeight,
    padding: `${paddingY} ${paddingX}`,
    borderRadius,
  };

  return <span style={badgeStyles}>{text}</span>;
};

export default Badge;
