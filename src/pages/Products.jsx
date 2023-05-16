import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useParams ,useNavigate} from "react-router-dom";

const product = [
  {
    title: "iPhone 14 Pro Max",
    image:
      "https://www.istore.kg/media/products/iphone-13-pro-max-green-select.webp",
    price: " 108300сом",
    id: '1',
    body: "Процессор и памятьiPhone Pro 14 Max оснащен чипом A14 Bionic, которым называют одним из самых мощных. Новый чип использует техпроцесса 5 нм. Apple отмечает, что и новый 6-ядерный процессор, и 4-ядерный графический процессор являются самыми быстрыми из когда-либо существовавших, а производительность iPhone 12 Pro Max стала на 50% выше, чем у любого другого телефона.",
  },
  {
    title: "iPhone 13 Pro Max",
    image:
      "https://softech.kg/image/cache/350fea0afebad312b766af625cda509c.png",
    price: "96 800сом",
    id: '2',
    body: "A15 Bionic — самый быстрый чип для iPhone. Новый 5‑ядерный графический процессор обрабатывает графику до 50% быстрее, чем любой другой процессор iPhone. Новые ядра производительности и эффективности позволяют решать самые сложные задачи с экономией аккумулятора. Обновлённый процессор обработки сигнала изображения уменьшает шумы и настраивает тональную компрессию на совершенно новом уровне.",
  },
  {
    title: "Apple IPhone 12 Pro Max",
    image: "https://www.istore.kg/media/products/12-pro-max-gold.webp",
    price: "92 900com",
    id: '3',
    body: "Процессор и памятьiPhone Pro 12 Max оснащен чипом A14 Bionic, которым называют одним из самых мощных. Новый чип использует техпроцесса 5 нм. Apple отмечает, что и новый 6-ядерный процессор, и 4-ядерный графический процессор являются самыми быстрыми из когда-либо существовавших, а производительность iPhone 12 Pro Max стала на 50% выше, чем у любого другого телефона.",
  },
];

export const Producst = () => {
    const navigate = useNavigate()
  const { productId } = useParams();
  const findeIt = product.find((item) => item.id === productId);

  return (
    <StyledContent >
      <div>
        <StyledImg src={findeIt.image} alt="" />
      </div>
      <div>
        <h2>{findeIt.title}</h2>
        <p>{findeIt.price}</p>
        <p>{findeIt.body}</p>
      <StyledButton variant="text"  onClick={() => navigate('/products')}>goBack</StyledButton>
      </div>
    </StyledContent>
  );
};

const StyledContent = styled('div')`
    display: flex;
    justify-content: space-around;
    align-items: center;

`
const StyledButton = styled(Button)`
    background-color: green;
    color: #efeff4;
    font-weight:600;
    &:hover{
        color: black;
    }
`

const StyledImg = styled('img')`
    width: 500px;
    height: 600px;
`
