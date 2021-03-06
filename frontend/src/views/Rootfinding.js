import React, { useState }from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getRootFinding } from "../functions/axios";

const useStyles = makeStyles((theme) => ({

    colorButton: {
        backgroundColor: ' #0cbaba ',
        backgroundImage:  'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
        fontSize: 20,
        fontWeight: "bold",
        
    },
    colorButton2: {
        backgroundColor: ' #0cbaba ',
        backgroundImage:  'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: theme.spacing(5),
      },
    state: {
        backgroundColor: ' #7f53ac ',
        backgroundImage:  'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
    },
    background: {
        backgroundColor: ' #7f53ac ',
        backgroundImage:  'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
    },
  
    card: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        marginTop: theme.spacing(15),
        // backgroundColor: '#f0ecfc',
        backgroundImage: 'linear-gradient(to right, #ffffff 0%, #e7dfe2 100%)',
        
    },

  
    

  }));

export default function Page6() {

    const classes = useStyles();
    const navigate = useNavigate();
    const [a, seta] = useState(0);
    const [b, setb] = useState(1);
    const [dx, setdx] = useState(0.001);
    const [result, setresult] = useState("");
  
    const generate = () => {
      const data = {
        a: a,
        b: b,
        dx: dx
      };
      getRootFinding(data).then((res) => {
        setresult(res);
      });
    };
    const back = () => {
        navigate("/");
      };
    return (
        <div>
            {/* <Navbar /> */}
            <Typography align="center">
                <Card className={classes.card}>
                    <CardHeader
                    title="บทที่ 6"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.state}
                    />
                    <CardContent>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item xs={12} sm={4} md={4}>
                        <TextField
                            id="outlined-basic"
                            value={a}
                            label="ค่า A"
                            variant="outlined"
                            onChange={(e) => seta(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                        <TextField
                            id="outlined-basic"
                            value={b}
                            label="ค่า B"
                            variant="outlined"
                            onChange={(e) => setb(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                        <TextField
                            id="outlined-basic"
                            value={dx}
                            label="ค่าใกล้เคียง"
                            variant="outlined"
                            onChange={(e) => setdx(e.target.value)}
                        />
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                id="outlined-read-only-input"
                                label="ผลลัพธ์"
                                value={result === "" ? "" : result}
                                InputProps={{
                                readOnly: true,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    </CardContent>
                    <CardActions>
                    <Grid container alignItems="flex-end">
                        <Grid item xs={12} >
                        <Button
                            onClick={generate}
                            fullWidth
                            variant="contained"
                            className={classes.colorButton}
                        >
                            คำนวน
                        </Button>
                        </Grid>
                        <Grid  item xs={12}>
                            <Button
                            onClick={back}
                            fullWidth
                            variant="contained"
                            className={classes.colorButton2}
                            >
                            กลับ
                            </Button>
                        </Grid>
                    </Grid>
                    </CardActions>
                </Card>
            </Typography>
        </div>
    )
}