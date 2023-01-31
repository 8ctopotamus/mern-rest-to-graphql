import { useQuery, useMutation } from '@apollo/client'
import { useParams, Link } from 'react-router-dom';
import { GET_MATCHUP } from '../utils/queries';
import { CREATE_VOTE } from '../utils/mutations';

const Vote = () => {
  
  let { id } = useParams();

  const { data, loading, error } = useQuery(GET_MATCHUP, {
    variables: { _id: id }
  })
  const matchup = data?.matchup || {}

  const [createVote] = useMutation(CREATE_VOTE)

  const handleVote = async (techNum) => {
    try {
      await createVote({ 
        variables: {
          _id: id,
          techNum,
        },
        refetchQueries: [
          { query: GET_MATCHUP },
          'matchup'
        ],
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>
      <div className="card-body text-center mt-3">
        <h2>
          {matchup.tech1} vs. {matchup.tech2}
        </h2>
        <h3>
          {matchup.tech1_votes} : {matchup.tech2_votes}
        </h3>
        <button className="btn btn-info" onClick={() => handleVote(1)}>
          Vote for {matchup.tech1}
        </button>{' '}
        <button className="btn btn-info" onClick={() => handleVote(2)}>
          Vote for {matchup.tech2}
        </button>
        <div className="card-footer text-center m-3">
          <br></br>
          <Link to="/">
            <button className="btn btn-lg btn-danger">View all matchups</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vote;
