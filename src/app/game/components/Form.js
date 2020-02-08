import React from "react";
import FileField from "../../../commons/components/fields/FileField";
import TextField from "./InputField";
import SelectField from "./SelectField";
import NumberField from "./NumberField";
import DateField from "./DateField";
import TextAreaField from "./TextAreaField";
import useForm from "react-hook-form";

const ESRB = [
  {
    id: 1,
    value: "EC",
    label: "Early Childhood (EC)"
  },
  {
    id: 2,
    value: "E10+",
    label: "Everyone 10+ (E10+)"
  },
  {
    id: 3,
    value: "E",
    label: "Everyone (E)"
  },
  {
    id: 4,
    value: "T",
    label: "Teen (T)"
  },
  {
    id: 5,
    value: "M",
    label: "Mature (MMature (M))"
  },
  {
    id: 6,
    value: "AO",
    label: "Adults Only (AO)"
  },
  {
    id: 7,
    value: "RP",
    label: "Rating Pending (RP)"
  }
];

const platforms = [
  {
    id: 1,
    value: "PLAYSTATION4",
    label: "Playstation 4"
  },
  {
    id: 2,
    value: "XBOXONE",
    label: "Xbox One"
  },
  {
    id: 3,
    value: "NINTENDOSWITCH",
    label: "Nintendo Switch"
  }
];

const Form = props => {
  console.log(props.game.releaseDate);
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)} encType="multipart/form-data">
      <div className="form-row">
        <TextField
          sizeColum={6}
          validation={register({ required: true })}
          name="name"
          label="Nome"
          value={props.game.name}
          onChange={e => props.setGame({ ...props.game, name: e.target.value })}
          placeholder="ex: Batman Arkham Asylum"
        />
        <SelectField
          label="Plataforma"
          sizeColum={3}
          validation={register({ required: true })}
          name="platform"
          value={props.game.platform}
          onChange={e =>
            props.setGame({ ...props.game, platform: e.target.value })
          }
          mapping={platforms}
        />
        <NumberField
          label="Preço"
          sizeColum={3}
          name="price"
          value={props.game.price}
          onChange={e =>
            props.setGame({ ...props.game, price: e.target.value })
          }
          step="0.01"
          min="0"
          placeholder="199.99"
        />
      </div>
      <div className="form-row">
        <SelectField
          validation={register({ required: true })}
          name="developer"
          label="Produtora"
          sizeColum={4}
          value={props.game.developer.id}
          customizedMapping={{ value: "id", label: "name" }}
          onChange={e =>
            props.setGame({ ...props.game, developer: { id: e.target.value } })
          }
          mapping={props.developers}
        />
        <DateField
          label="Data de Lançamento"
          sizeColum={4}
          value={props.game.releaseDate}
          onChange={e =>
            props.setGame({ ...props.game, releaseDate: e.target.value })
          }
        />
        <SelectField
          label="Classificação Etária"
          sizeColum={4}
          value={props.game.ESRB}
          onChange={e => props.setGame({ ...props.game, ESRB: e.target.value })}
          mapping={ESRB}
        />
      </div>
      <TextAreaField
        label="Descrição"
        value={props.game.description}
        onChange={e =>
          props.setGame({ ...props.game, description: e.target.value })
        }
        rows={3}
      />
      <div className="form-row">
        <div className="form-group col-md-6">
          <FileField
            label={
              props.coverInputLabel ? props.coverInputLabel : "Capa do Jogo"
            }
            onChangeImage={props.handleUploadCover}
            accept="image/*"
          />
        </div>
        <div className="form-group col-md-4 openModal">
          <a href="/#" onClick={props.toggleModal}>
            Adicionar screenshots...
          </a>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        {props.game.id ? "Alterar" : "Salvar"}
      </button>
    </form>
  );
};

export default Form;
