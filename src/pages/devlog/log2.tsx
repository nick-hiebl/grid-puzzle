import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo, PageProps } from '../types';
import { CaptionedImage } from './utils';

const Devlog = (props: PageProps) => {
  return (
    <Container maxWidth="md">
      {props.links}

      <Typography variant="h3">
        Devlog #2: Where to from here?
      </Typography>

      <p>
        I've got a basic grid puzzle game, with almost 30 different mechanics
        to choose from. The question is, how do I make this into a proper game?
        There are two aspects I think to this. One is making the actual "game"
        part. A 3D world for the player to walk around in and interact with
        puzzles. I've actually had a bit of a stab at this, but I'm finding
        working in Unity pretty tedious so I'm putting that to the site for
        now. The second part is the puzzle design. What mechanics should I use?
        What should I get rid of? What new ones should I introduce? How do I
        structure the introduction of the various mechanics into the game? I'll
        think a bit about one of those questions now.
      </p>

      <Typography variant="h4">What to get rid of?</Typography>

      <p>
        There are some mechanics from the 30 day challenge that I don't really
        like.
      </p>

      <Typography variant="h5">The fuzzy number</Typography>

      <CaptionedImage
        caption="The mechanic from day 3"
        src="counts/continent.png"
        id="day-3-mechanic"
        isBlack
      />

      <p>
        I was a <i>huge</i> fan of this mechanic when I first introduced it. It
        was an absolutely massive boost to my confidence in the puzzle. It has
        very low correlation to the basic mechanics and makes you think really
        differently about how you find a solution. However, two big problems
        came out of this mechanic.
      </p>

      <p>
        Firstly, the mechanic was <i>incredibly</i> difficult to learn. A few
        people successfully worked it out, but most needed guidance to work out
        what was going on with it. I did end up making some extra introductory
        puzzles to help, but it's still a bad sign.
      </p>

      <p>
        Secondly, the mechanic wasn't fun. This took me quite a long time to
        realise. To the credit of some testers, they did point this out to me,
        but it took me a bit to catch on. I realised as soon as I'd implemented
        the final puzzles for day 3 that they could be brutally difficult, but
        I thought that was part of the charm. I was so nervous early on that
        the puzzles would always be trivial. After a few days I stopped using
        the mechanic in puzzles as I focused on newer ones. Coming back much
        later I realised that it just wasn't worth it. They gave you almost no
        information along the way <i>to</i> the solution. It just told you at
        the end that you were wrong, often when it was too late to do anything.
      </p>

      <p>
        So sadly, this is the first mechanic to go. It's sad, because I was a
        big fan of it.
      </p>

      <Typography variant="h5">Numbers on the board</Typography>

      <p>
        No picture for this one, for perhaps obvious reasons. This is the
        mechanic from day 8. It was one of the first mechanics that I thought
        to include.
      </p>

      <p>
        It just didn't give much to go on, and was very frustrating to reason
        about. The only real times that I used it in later days was when it
        was very easy to reason about. A 4 in the corner, or a 6 on the edge.
      </p>

      <Typography variant="h5">Odds and ends</Typography>

      <CaptionedImage
        caption="The mechanic from day 16"
        src="counts/16-a.png"
        id="day-16-mechanic"
        isBlack
      />

      <CaptionedImage
        caption="The unsurprising mechanic from day 17"
        src="counts/16-b.png"
        id="day-17-mechanic"
        isBlack
      />

      <p>
        These mechanics <i>may</i> stay in the game. I'm not a huge fan of them
        but they were useful at times as a rule that gave <i>just</i> enough
        restriction to ensure the puzzle only had one solution.
      </p>

      {props.links}
    </Container>
  );
};

export const Page: PageInfo = {
  title: 'Devlog #2: Where to from here?',
  description: 'My first thoughts on where to go next',
  link: '/devlogs/2',
  component: Devlog,
};
