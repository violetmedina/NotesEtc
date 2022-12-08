# Process to solution

- ask clarifying questions:
    - Should there be several input fields for multiple lines of text or should each sentence be parsed by punctuation?
    - If there are multiple fields, how many should there be? Is that pre-determined or can the user press a button to get a new input field?
    - Does the data need to be stored in memory for later use?
    - Can I assume that the number of sentences will be small, or will there be a large number of sentences? Will I need to optimize the data analysis for a large set of data?
    - Would you like this to be hosted, or is cloning the repo satisfactory?
    Add'l questions, if necessary:
    - If the data needs to be persisted, how long should it be persisted?  Can I use short term persistence like redux and local storage, or does it need to be stored in a database?
    - Can I assume that there is only one user or do I need to distinguish between multiple users?
- create react app
- start with basics, text box, button, logic etc.
    - adding input box with event handler of onSubmit to pull the sentences and add them to local storage. (convert to array) Add corresponding function.
    - create function to handle conversion of string to array
- depending on answer to questions, may need
    - memoization (bigO)
    - multiple text boxes
    - multiple buttons
- Answers to ?s
    To answer your questions about the assignment:

    You can decide on how you would like to approach this – there is no requirement of multiple input fields vs. just one. However, the application should be able to handle non-alphanumeric characters.
    This is also up to you, depending on your approach.
    The data does not need to be stored in-memory.
    The application should be designed with performance and optimization in mind.
    The app can be hosted locally (on your machine) for the purpose of presenting it to us in the interview.
