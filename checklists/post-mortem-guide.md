# 💀 Post Mortem Guide

### Guide

Here are ten suggestions for conducting a good project postmortem:

**1. Involve all contributors.**

If others were involved in your project, arrange a project review meeting. If you were the sole contributor, set aside time to reflect on your experience. Document the good, the bad, and the ugly aspects of the project. Note all grievances, and solicit ideas for future improvement. I recommend using a project review questionnaire with three parts. First, use a one to ten rating system to quantify subjective feedback. Secondly, include targeted questions for specific areas that might need improvement. And finally, use a free-form comments section for open-ended feedback.

**2. Document the postmortem in writing.**

While it is perfectly acceptable to create a simple text document for small projects, I recommend using HTML for large projects. The document can then be published on an intranet, so everyone in the company has easy access to it. This way you can provide links to additional resources such as design documents, schedules, and archived files. It also makes it easy to create a collection of postmortems over time, with links between related sections of different documents. For a multi-release product, include additional data on each upgrade. A series of postmortems can ultimately evolve into a valuable record of your hard-earned wisdom.

**3. Begin with a project overview.**

Begin the postmortem document with a brief overview of your project, including a design overview, estimated budget, and project start and finish dates. Describe the product's purpose, intended customer, and other general information.

**4. Include project details.**

Document the quantifiable details of your project. Include your schedule and budget estimates as well as the true outcomes. List the number of lines of source code in the release as well as the lines of reused code. Document the size of the media and system requirements for the end user. List any known bugs or compatibility problems. Note which development tools were used and their version numbers, including any mid-project upgrades. List everyone who worked on the project, and document their contributions.

**5. Document what went right.**

Document what went right with your project. Did the final product turn out better than expected? Did you experience an occasional stroke of luck? List at least ten things that turned out well for your project. For my last project, I had the most luck with quality assurance. I paid tremendous attention to code quality, and I was able to keep the program virtually bug-free throughout its entire development. Consequently, I was able to spend very little time on debugging, allowing me extra time to improve the quality of the product.

**6. Document what went wrong.**

What difficulties did you encounter? What assumptions proved incorrect? Compile a detailed list of your project's shortcomings. List at least ten things that turned out worse than expected. Document unpleasant mid-project surprises as well. My last project's greatest challenge was flushing out the design. I was developing a unique new type of game, and I experienced extreme difficulty trying to get all of the gameplay elements to coalesce into a unified whole that would be fun to play. I spent about two-thirds of the entire project on very painstaking level design, far longer than I expected.

**7. Assess your risk management.**

Document all the risks you took during the project, and note how effectively you managed them. Did you explore experimental ideas, use new technology or development tools, or develop for a new platform? Did your schedule slip from poor estimation practices? Did you take big risks, or did you play it relatively safe? Assess your risk management experience, paying particular attention to how you would change your approach for the next project.

**8. Assess mid-project changes.**

What unanticipated changes occurred throughout the project? How did you respond to them? Did you incorporate some great mid-project additions, or was excessive feature creep a problem? I was able to manage change effectively on my last project by designing flexibility into the game engine. But once the level design reached a certain point, most new changes had to be locked out in order to prevent corrupting previous work.

**9. Draw meaningful conclusions.**

What conclusions can you draw from your project history that will help you improve in the future? What should you start doing, keep doing, or stop doing? Describe new practices you should try for your next project. This is perhaps the most important part of the postmortem, so be prepared to spend more time here than in any other section.

**10. Take action.**

It would be a great waste of time to create a beautiful project postmortem, archive it, and forget about it. The final step is to develop an action plan that can be applied to your next project. Review your project history, reflect on the lessons you've learned, and specify new guidelines to follow in the future. I recommend creating a checklist for your next project. If you already have a checklist, then update it with new refinements.

Whether you are a lone-wolf programmer or part of a larger team, postmortems will help you maximize the benefits gained from your hard-earned experience. On large projects you can even conduct a mini-postmortem after each milestone, allowing you to profit from what you've learned as soon as possible. One final benefit of conducting a postmortem is that you gain a very gratifying sense of closure because you actually document all the personal growth you've experienced as a result of completing the project.

### Q

The goal of a postmortem is to draw meaningful conclusions to help you learn from your past successes and failures. A postmortem can be an extremely productive method of improving your development practices. Complete the following postmortem questionnaire for your SE group project. Notes on the questions are attached. Your budget is time rather than money. Bring your completed postmortem to the SE group project demonstration.

**Project Overview**

**Document the following data.**

Project Name:

Design Overview:

Project Start / Finish Dates (Estimated):

Project Start / Finish Dates (Actual):

Budget (Estimated):

Budget (Actual):

Release Date:

Release Platform:

Development Platform:

Lines of Code:

Percentage of Code Reuse:

Size of Media:

System Requirements:

Intended Customer:

Product's Purpose:

Development Tools:

Known Bugs:

Known Compatibility Issues:

Team Members and Responsibilities:

**Project Ratings**

**Rate each of the following on a scale of 1 (poor) to 10 (outstanding):**

How well did the project achieve its goals?

Was the project developed in a reasonable amount of time?

Was this a cost-effective project?

#### Questioneer

**Planning**

      Were the group goals clear to you?

      Were the marketing goals clear to you?

      Were the development goals clear to you?

      How complete do you think the planning was before the actual commencement of work?

      How could planning be improved?

      What recommendations would you make for the planning process for the next release?

**Resources**

      How can we improve our methods of resource planning?

      Were there enough resources assigned to the project, given the schedule constraints?

      What could have been done to prevent resource overload?

      Do you think resources were managed effectively once the project started?

**Project Management/Scheduling**

      Was the schedule realistic?

      Was the schedule detailed enough?

      Looking over the schedule, which tasks could you have estimated better and how?

      Did having a series of milestones help in making and monitoring the schedule?

      What were the biggest obstacles to meeting the scheduled dates?

      How was project progress measured? Was this method adequate? How could it be improved?

      Was contingency planning apparent? How can we improve our contingency planning for the next release?

      How could scheduling have been done better or been made more useful?

      What would you change in developing future schedules?

      How were changes managed late in the cycle?

      Were the trade-offs between schedule and features handled well?

**Development/Design/Specifications**

      Were there issues in the functional design and ownership?

      Were there issues in the architectural design and ownership?

      Were there issues involved in using components or with code sharing? How could this be done more effectively?

**Test**

      Were there issues in test interaction?

      Were there issues in test case design and coverage?

      Were there enough testers?

      Was the quality of the product we shipped acceptable?

      Did we work well with all of the testers?

**Communication**

      Was communication in your group handled efficiently/effectively?

      Was communication between groups handled efficiently/effectively?

      Was program management effective in disseminating information?

      Was program management effective in resolving issues?

      Was the e-mail alias \[eGroup in our case] usage effective? How could the aliases be better set up to improve communication?

      Were the status meetings effective?

      Was communication with the external groups (component suppliers, content suppliers, OEMs, support, international) effective?

**Postmortem Checklist**

**Tips for Conducting an Effective Postmortem**

**Before the Meeting**

Here are some tasks to do in advance of the meeting.

 Send out copies of previous postmortem results for review, if there are any.

 Ask team members to send ahead issues they would like to discuss at the meeting.

 Send out an agenda with a list of potential topics, if you have any.

 Reserve a large room. Tape flipchart paper to the walls, and write down the topics you already know about. Make sure you have markers for writing comments, ideas, and suggestions on the flipcharts.

**During the Meeting**

Here are some tips for how to conduct the postmortem meeting. If, during the meeting, you wish to contribute to the discussion, have someone else record your comments.

 Set the stage for productivity by explaining that the meeting will be conducted in a blame-free atmosphere.

 Ask team members for any issues they want to discuss that were not sent to you before the meeting. Add those to the topics already posted.

 Explain that you’re interested in listing things that went right as well as things that went wrong.

 Review and rank all of the issues to be discussed.

 Starting with the top issue, discuss and record what went wrong and what went right in each case.

 When discussing items concerning what went wrong, stop the discussion after five to seven minutes, and ask for suggestions about what to do differently in the future.

 Check that all functional groups have contributed to each issue. You might need to ask people to offer an opinion.

 Save time at the end of the meeting to prioritize recommendations and assign owners if you can.

**After the Meeting**

Here are some tips for what to do after the meeting.

 Send written notes on the discussion to all attendees and other interested parties.

 Document the recommendations.

 Be sure to refer to the recommendations in future project meetings so people can track progress.

Pasted from <[http://art.cim3.org/pm\_workshop/Project\_Post\_Mortem/Postmortem\_Template--MSF.html](http://art.cim3.org/pm\_workshop/Project\_Post\_Mortem/Postmortem\_Template--MSF.html)>
