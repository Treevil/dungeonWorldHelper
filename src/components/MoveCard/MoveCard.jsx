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
                    <Avatar>
                        F
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
                    alignItems={'center'}
                >
                    <Grid item={true} xs={2}>
                        <strong>10+</strong>
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
                        <strong>
                            7-9
                        </strong>
                    </Grid>
                    <Grid item={true} xs={10}>
                        You deal your damage to the enemy and the enemy makes an attack against you.
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

MoveCard.propTypes = {

}

export default MoveCard;
