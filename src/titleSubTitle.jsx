import { Typography } from './Typography';

export const TitleSubTitle = ({ title, subTitle,showSubTitle }) => {
  return (
    <div>
      <Typography isUnderline={false} color="black">{title}</Typography>
      <br></br>
      {showSubTitle &&<Typography color="gray">{subTitle.substring(0,10)+"..."}</Typography>}
    </div>
  );
};



      

