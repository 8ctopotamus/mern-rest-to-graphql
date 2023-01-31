import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_TECHS } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';

const Matchup = () => {
  const [formData, setFormData] = useState({
    tech1: 'JavaScript',
    tech2: 'JavaScript',
  });
  let history = useHistory();

  const [createMatchup] = useMutation(CREATE_MATCHUP)

  const { data } = useQuery(GET_ALL_TECHS)
  const techList = data?.techs || []

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await createMatchup({
      variables: {
        tech1: formData.tech1,
        tech2: formData.tech2,
      }
    })

    const matchupId = response?.data?.createMatchup?._id   

    if (!matchupId) {
      throw new Error('something went wrong!');
    }

    
    history.push(`/matchup/${matchupId}`);


    setFormData({
      tech1: 'JavaScript',
      tech2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <label>Tech 1: </label>
          <select name="tech1" onChange={handleInputChange}>
            {techList.map((tech) => {
              return (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              );
            })}
          </select>
          <label>Tech 2: </label>
          <select name="tech2" onChange={handleInputChange}>
            {techList.map((tech) => {
              return (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              );
            })}
          </select>
          <button className="btn btn-danger" type="submit">
            Create Matchup!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Matchup;
