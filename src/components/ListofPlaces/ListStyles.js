import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  select: {
    marginTop: theme.spacing(2),
  },
  load: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));