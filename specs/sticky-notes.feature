Feature: Sticky Notes

    Scenario: User creates Note
        Given a User has double clicked anywhere within the window
        And the click-area is not within a Note
        When the double-click is over
        Then a Note of a default size is shown at the location of the double-click
        And the User can edit the Note
        And the User can change the size of the note by dragging
        And the User can change the color of the note
        And the User can change the z-index of the note

    Scenario: User edits Note
        Given a User has previously created a Note
        When the User clicks on the Note
        Then the User can enter text on the Note or edit its metadata

    Scenario: User saves Note
        Given a User has seen a note
        When the User enters text or edits metadata
        Then the Note information is saved

    Scenario: User changes Note size by dragging
        Given a User has previously created a Note
        When the User drags the cursor on any of the note's corners
        Then the Note's size changes as per the drag

    Scenario: User deletes Note
        Given a User has previously created a Note
        When the User drags the Note over a region at the top of the page
        Then an outline is displayed showing the user can drop the note to delete it
        And dropping the note should remove it from the page

    Scenario: User views previously created notes on page reload
        Given a User has previously created one or more notes
        When the User loads or reloads the page
        Then the Notes should be rendered
        And their positions, colors, and z-indices on the page should be persisted
