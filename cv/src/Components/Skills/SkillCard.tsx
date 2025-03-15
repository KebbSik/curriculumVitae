interface Props {
  percent: number;
  skillName: string;
  color: string;
  img?: string;
}

const SkillCard = ({ percent, skillName, color, img }: Props) => {
  return (
    <div
      className="skillCard_container"
      style={{
        background: `radial-gradient(${color} -20%,#041e2f 100%)`,
        border: `2px solid ${color}`,
      }}
    >
      <div className="card">
        <div className="percent">
          {percent}
          <sup>%</sup>
        </div>
        {skillName}
      </div>
    </div>
  );
};

export default SkillCard;

// animated skillCard
