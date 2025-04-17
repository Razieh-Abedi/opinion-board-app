import { useActionState, use } from "react";

import { OpinionsContext } from "../store/opinions-context";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function shareOpinionAction(prevState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");
    const enteredData = {
      userName,
      title,
      body,
    };
    let errors = [];
    if (!userName) {
      errors.push("Please provide your name.");
    }
    if (title.trim().length < 5) {
      errors.push("Title should at least be five characters long.");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Opinion should be between 10 and 300 characters long.");
    }
    if (errors.length > 0) {
      return { enteredData, errors };
    }
    await addOpinion(enteredData);
    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(shareOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredData?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredData?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredData?.body}
          ></textarea>
        </p>
        {formState?.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
