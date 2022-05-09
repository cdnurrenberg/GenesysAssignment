import React from 'react';
/* 
 I did not get to writing tests for this project. Similar to the thinking I outlined
 in JOURNAL.md, this would absolutely have to be something that gets considered and
 completed to company standards before publishing a pull request or approving / merging one.

 For component-based tests, I like doing DOM snapshots so it's explicitly clear when a style changes
 From PR to PR.

 it would look something like

 it('renders a story card properly', () => {
   act(() => {
     render(<StoryComponent {...props}, parent) 
   });
   expect(component.innerHTML).toMatchSnapshot();
 })

 So every time a component is modified we will have to update snapshots and confirm that
 the test results are still in alignment with expectations, design, etc.

 I will admit I need more experience API testing. I have worked along side tools that test
 endpoints and simulate endpoints for other testing, but I have not done much of this myself
 unfortunately.
*/