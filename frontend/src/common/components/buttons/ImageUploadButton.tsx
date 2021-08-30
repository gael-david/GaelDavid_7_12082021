import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { shortenFileName } from "../../../helpers/stringUtils";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UploadButton = styled.label`
  width: 4rem;
  height: 4rem;
  background: #30465d;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FileName = styled.p`
  font-size: 1.2rem;
`;

type Props = {
  image?: File;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageUploadButton({ image, onChange }: Props) {
  const shortFileName = image ? shortenFileName(image.name) : null;

  return (
    <Wrapper>
      <UploadButton>
        <FontAwesomeIcon icon={faImage} />
        <input type="file" name="image" id="image" onChange={onChange} style={{ display: "none" }} />
      </UploadButton>
      <FileName>{shortFileName}</FileName>
    </Wrapper>
  );
}
