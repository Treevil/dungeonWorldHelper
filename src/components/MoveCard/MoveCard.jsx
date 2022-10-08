import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardContent,
    Avatar, Box,
    Grid, Badge,
    Chip,
} from "@mui/material";
import Biceps from '../../asset/gameIcon/biceps.svg'
import { red } from '@mui/material/colors';
import GameIcon from "../GameIcon/GameIcon";
function MoveCard(
    {

    }
) {
    return (
        <Card
            raised={true}
            sx={{
                maxWidth: '420px'
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            bgcolor: red[500],
                        }}
                    >
                        <GameIcon
                            icon={'biceps'}
                            fill={'#f2f2f2'}
                        />

                    </Avatar>
                }
                title={'Hack and Slash'}
                subheader={<>When you <strong>attack an enemy in melee</strong></>}
                action={
                    <Chip
                        label={'Basic'}
                    >
                    </Chip>
                }
            />
            <CardContent
            >
                <Grid
                    container
                    spacing={2}
                    sx={{mb: 2}}
                >
                    <Grid item={true} xs={2}>
                        <GameIcon
                            icon={'mushroomCloud'}
                        />
                    </Grid>
                    <Grid item={true} xs={10}>
                        You deal your damage to the enemy and avoid their attack. <br/>
                        At your option, you may choose to do +1d6 damage but expose yourself to the enemy’s attack.
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{mb: 2}}
                >
                    <Grid item={true} xs={2}>
                        <GameIcon
                            icon={'plainCircle'}
                        />
                    </Grid>
                    <Grid item={true} xs={10}>
                        You deal your damage to the enemy and avoid their attack. <br/>
                        At your option, you may choose to do +1d6 damage but expose yourself to the enemy’s attack.
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{mb: 2}}
                    alignItems={'center'}
                >
                    <Grid item={true} xs={2}>
                        <GameIcon
                            icon={'abstract030'}
                        />
                    </Grid>
                    <Grid item={true} xs={10}>
                        You deal your damage to the enemy and the enemy makes an attack against you.
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{mb: 2}}
                    alignItems={'center'}
                >
                    <Grid item={true} xs={2}>
                        <GameIcon
                            icon={'circle'}
                        />
                    </Grid>
                    <Grid item={true} xs={10}>
                        Miss
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

MoveCard.propTypes = {

}

export default MoveCard;
