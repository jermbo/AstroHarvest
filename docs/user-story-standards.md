# User Story Standards

## Overview

This document establishes the standards and expectations for writing user stories in software development projects. All user stories must follow these guidelines to ensure consistency, clarity, and effective communication across the development team.

## User Story Structure

### Basic Format

Every user story must follow the standard Agile format:

```
As a [type of user],
I want [some goal/functionality],
So that [some reason/benefit].
```

### Required Components

Each user story must include the following sections:

#### 1. Title

- **Format**: `[PBI-XXX] - Brief descriptive title`
- **Example**: `PBI-001 - User can view personalized dashboard`

#### 2. User Story Statement

- Must follow the "As a... I want... So that..." format
- Be specific about the user type (e.g., "business consultant", "financial analyst", "new user")
- Clearly state the desired functionality
- Explain the business value or benefit

#### 3. Requirements

- Functional requirements and feature expectations
- UI elements and user interactions needed
- Business rules and constraints
- Design references and specifications
- Data handling expectations (not implementation details)
- **Use numbered lists for easy reference during discussions**

#### 4. Acceptance Criteria

- Written in streamlined Given-When-Then format
- Each criterion should be a single, testable scenario
- Focus on specific user interactions and expected outcomes
- Cover primary flow, alternative paths, and edge cases
- Keep scenarios concise and action-oriented
- **Use numbered lists for easy reference during reviews**

#### 5. Definition of Done

- Technical requirements (code review, testing, documentation)
- Quality standards that must be met
- Deployment/release criteria

#### 6. Priority

- **Must Have**: Critical functionality required for release
- **Should Have**: Important but not critical
- **Could Have**: Nice to have if time permits
- **Won't Have**: Out of scope for current iteration

#### 7. Story Points/Effort Estimate

- Use Fibonacci sequence (1, 2, 3, 5, 8, 13, 21)
- Based on complexity, effort, and uncertainty
- Include brief justification for the estimate

#### 8. Status Tracking

- Current status of the user story
- Assigned team members and roles
- Important dates and milestones
- Blockers and dependencies status

## Status Management

### User Story Status Values
- **Backlog**: Story is written but not yet prioritized for development
- **Ready for Refinement**: Story needs team review and estimation
- **Ready for Development**: Story is refined, estimated, and ready to be picked up
- **In Development**: Story is actively being worked on
- **Ready for Review**: Development is complete, awaiting code review
- **Ready for Testing**: Code review passed, ready for QA testing
- **In Testing**: Story is being tested by QA team
- **Ready for Deployment**: Testing passed, ready for production deployment
- **Done**: Story is deployed and accepted by Product Owner
- **Blocked**: Story cannot proceed due to dependencies or issues

### Ownership and Assignment
- **Assigned To**: Person currently responsible for moving the story forward
- Assignment changes as the story progresses through different phases

## Template

```markdown
# [PBI-XXX] - [Title]

## User Story

As a [type of user],
I want [some goal/functionality],
So that [some reason/benefit].

## Requirements

### [Feature/Function Name]
1. [Main requirement]
   a. [Specific detail or sub-requirement]
   b. [Additional detail or variation]
   c. [Implementation note or constraint]
2. [Another main requirement]
   a. [Specific detail]
   b. [Additional detail]

### [Business Rules]
1. [Primary business rule]
   a. [Specific condition or exception]
   b. [Additional constraint]
2. [Secondary business rule]

### [Design References]
1. [Link to wireframes, mockups, or design files]
2. [Specific design notes or requirements]

## Acceptance Criteria

1. Given [initial state/context], when [user action], then [expected outcome]
   a. [Specific detail about the outcome]
   b. [Additional verification point]
   c. [Edge case or variation]

2. Given [initial state/context], when [user action], then [expected outcome]
   a. [Specific detail about the outcome]
   b. [Additional verification point]

3. Given [initial state/context], when [user action], then [expected outcome]

4. Given [initial state/context], when [user action], then [expected outcome]
   a. [Specific detail about the outcome]

## Definition of Done

- [ ] Code is written and follows project coding standards
- [ ] Unit tests are written and passing (minimum 80% coverage)
- [ ] Integration tests are written and passing
- [ ] Code has been peer reviewed and approved
- [ ] Feature has been tested in staging environment
- [ ] Documentation has been updated
- [ ] Accessibility requirements have been met
- [ ] Performance requirements have been met
- [ ] Security review completed (if applicable)
- [ ] Product Owner has accepted the story

## Additional Information

### Priority

[Must Have | Should Have | Could Have | Won't Have]

### Story Points

**Estimate**: [1-21 points]
**Justification**: [Brief explanation of complexity factors]

### Dependencies

- [List any dependencies on other stories, systems, or external factors]

### Assumptions

- [List any assumptions made during story creation]

### Notes

- [Any additional context, technical considerations, or implementation notes]

## Status Tracking

### Current Status
**Status**: [Backlog | Ready for Refinement | Ready for Development | In Development | Ready for Review | Ready for Testing | In Testing | Ready for Deployment | Done | Blocked]

### Team Assignment
**Assigned To**: [Name - person currently responsible for the story]

### Important Dates
**Created**: [Date]
**Last Updated**: [Date]
**Target Sprint**: [Sprint number/name]
**Started Development**: [Date]
**Completed Development**: [Date]
**Deployed**: [Date]

### Blockers and Issues
- [List any current blockers or issues]
- [Include resolution plans and owners]

### Sprint History
- **Sprint X**: [Status and progress notes]
- **Sprint Y**: [Status and progress notes]
```

## Writing Guidelines

### User Types

Be specific about user personas relevant to your project. Common examples include:

- **End User**: Primary user of the application
- **Admin User**: User with administrative privileges
- **Power User**: Advanced user with specialized needs
- **New User**: First-time user of the platform
- **Guest User**: Unauthenticated user with limited access
- **API Consumer**: Developer integrating with system APIs
- **Content Creator**: User who creates or manages content
- **Viewer/Reader**: User who primarily consumes content

### Acceptance Criteria Best Practices

1. **Be Specific**: Avoid vague terms like "user-friendly" or "fast"
2. **Include UI Elements**: Reference specific buttons, fields, or components
3. **Define Data Requirements**: Specify required fields, formats, and validations
4. **Cover Error Scenarios**: Include what happens when things go wrong
5. **Consider Different User States**: Logged in/out, different permissions, etc.

### Common Pitfalls to Avoid

- **Too Large**: Stories should be completable in one sprint
- **Too Technical**: Focus on user value, not implementation details
- **Missing Context**: Include enough background for any team member to understand
- **Unclear Success Criteria**: Acceptance criteria must be unambiguous
- **No Business Value**: Every story must deliver user or business value

## Story Sizing Guidelines

### 1 Point - Trivial

- Simple text changes
- Minor UI adjustments
- Configuration updates

### 2 Points - Small

- Simple form additions
- Basic CRUD operations
- Minor feature enhancements

### 3 Points - Medium

- New page creation
- Integration with existing APIs
- Moderate complexity features

### 5 Points - Large

- Complex business logic
- New integrations
- Multi-step workflows

### 8+ Points - Extra Large

- Should be broken down into smaller stories
- Complex features spanning multiple components
- Significant architectural changes

## Review Process

1. **Story Creation**: Product Owner or Business Analyst creates initial story
2. **Technical Review**: Development team reviews for technical feasibility
3. **Refinement**: Team collaborates to refine acceptance criteria and estimates
4. **Approval**: Product Owner approves final story before sprint planning
5. **Sprint Planning**: Team commits to stories for upcoming sprint

## Examples

See the `examples/` folder for sample user stories that follow these standards.

---

**Document Version**: 1.0
**Last Updated**: August 7, 2025
**Next Review**: September 7, 2025
