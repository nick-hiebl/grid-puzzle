import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo, PageProps } from '../types';
import { image } from './utils';

const Devlog = (props: PageProps) => {
  return (
    <Container maxWidth="md">
      {props.links}

      <Typography variant="h3">
        Devlog #1: 30 day challenge de-brief
      </Typography>

      <p>
        This project started as part of a 30 day creativity challenge. It was
        open ended, and I decided to pursue something that I thought would be
        only moderately challenging: introducing new mechanics to a simple
        puzzle game every day for 30 days.
      </p>

      <p>
        It turns out that I <i>severely</i> underestimated how much work this
        would be.
      </p>

      <p>
        In defence of my estimate, I <i>had</i> done some preparation
        beforehand. I had already made a list of candidate mechanics to be
        introduced. Over the course of two days of thinking about the concept
        whilst working on other things, I had come up with at least 24
        different mechanics in a notebook on my desk.
      </p>

      <p>
        Another reason why I thought it wouldn't be too intense (especially
        in the first few days) was because I didn't think I would actually be
        coding from the start of the challenge. The competition started on a
        Wednesday, and I planned to create puzzles "on paper" (read: as images
        only, so not interactive) for the first few days until the weekend.
        Once the weekend had arrived, then I would begin actually developing an
        interactive website where you could test the puzzles.
      </p>

      <p>There were two problems with this plan.</p>

      <p>
        First was the assumption that creating the puzzles "on paper" would be
        an effective time saver. This was very wrong (thought admittedly not
        wrong in principle). I ended up spending more than 2 hours on the first
        night working on the images for the puzzles. I definitely got a bit too
        carried away with the aesthetics and hand-drawn style of the puzzles,
        which meant I spent way way longer than I needed to spend on drawing.
      </p>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <img
          alt="A hand-drawn puzzle solution from the first day."
          aria-labelledby="hand-drawn-alt"
          src={image('devlog-images/sample-day1-puzzle.png')}
        />
        <p id="hand-drawn-alt">
          A hand-drawn puzzle solution from the first day.
        </p>
      </div>

      <p>
        Drawing the images and sample solutions was definitely enjoyable and I
        am pretty happy with the result, but it was not a <i>great</i> way for
        me to use my time, and I ended up being up really late working on them.
        Additionally, the images weren't really going to get people on board,
        as it was very unlikely for me to convince friends to transcribe a big
        grid down onto paper to try things out for themselves. On top of that,
        even if they did try it on paper it would be a pretty poor experience
        as the early puzzles were not "deducible", in other words you couldn't
        logically solve the puzzles without doing any back-tracking. (More on
        this later)
      </p>

      <p>
        This ended up with me actually making the website <i>the next day</i>.
        Obviously one of the biggest time investments would be in the setup of
        the initial website. I had to make everything near from scratch and set
        up the Github pages and all that.
      </p>

      <p>
        The outcome was alright though, and the puzzles were interactive and
        testable. Over the course of the challenge, things gradually improved
        and became more and more flexible, making it near trivial to implement
        some of the mechanics.
      </p>

      <p>
        Of the 24 mechanics that I listed on the first two days of thinking
        about the puzzle concept (which quickly became 31 after a few more
        days), only 9 were implemented. I may revisit some of the others later,
        but it seems fairly unlikely.
      </p>

      <p>
        Some days had pretty interesting new ideas. I think that the day 7
        mechanic (the white squares) was one of the best mechanics introduced
        in the whole challenge. It acts as a fairly interesting counter-point
        to other mechanics (at least from a puzzle-designing perspective) as it
        is very unrelated to the basic concept of telling you how many dots
        belong in a row or column.
      </p>

      <p>
        Honestly, quite a few of the days were cop-out ideas. Any easy way to
        make a new mechanic was to simply "invert" a previous, existing
        mechanic. I think some of these were interesting (e.g. day 6), some
        were necessary (e.g. day 10), and some were really lazy (e.g. day 26).
      </p>

      <p>
        The mechanic which required the biggest time investment was easily day
        23 (the tetris shapes). I spent many hours working on that, and in the
        end I'm not too sure how interesting it really is.
      </p>

      <p>
        The biggest disappointment of a mechanic was day 27 (the big cross).
        Just by the very nature of the puzzle, you would almost always satisfy
        that mechanic and solve the puzzle accidentally even whilst ignoring
        it. It's possible that with some better puzzle design this mechanic
        could make some working puzzles, but I didn't have the energy in me
        that night to actually work on puzzles that much after implementing
        the mechanic. As a result, I believe this was the only mechanic which
        didn't make any appearance whatsoever in day 30's puzzles.
      </p>

      <p>
        For the last few days it was a huge struggle for me to think of new
        mechanics to implement, which resulted in pretty lazy mechanics on days
        25, 26 and 28. Funnily enough though, since stopping the challenge I've
        thought of at least four new mechanics that are actually pretty
        interesting and I'm looking forward to trying them out after a bit of a
        break.
      </p>

      <p>
        The 30 day challenge was a great, but also very stressful way for me to
        work on this. I'm so glad I did it because I never would've worked on
        this as much without it.
      </p>

      {props.links}
    </Container>
  );
};

export const Page: PageInfo = {
  title: 'Devlog #1: 30 day challenge de-brief',
  description: 'Some reflections on that experience',
  link: '/devlogs/1',
  component: Devlog,
};
