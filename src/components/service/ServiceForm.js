import React, { useState } from 'react'; // Import React and useState

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {
  // Define the 'service' state variable and 'setService' function
  const [service, setService] = useState({
    name: '',
    cost: 0,
    description: '',
  });

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    // Update the 'service' state based on the input field's name
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
