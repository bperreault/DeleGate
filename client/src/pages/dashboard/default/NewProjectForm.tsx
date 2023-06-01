import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

type NewProjectFormProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NewProjectForm({ loading, setLoading }: NewProjectFormProps) {
  const [prompt, setPrompt] = useState("");
  const examplesGiven = [
    "Build an operating system in Rust",
    "Organize a family reunion",
    "Start a food truck business",
  ];

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    console.log(prompt);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label as="h3">What would you like to get done?</Form.Label>
        <Form.Control
          as="textarea"
          size="lg"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          placeholder={`e.g. ${
            examplesGiven[
              Math.floor(Math.random() * (examplesGiven.length - 1))
            ]
          }.`}
          rows={3}
        />
      </Form.Group>
      <div className="d-flex justify-content-end mt-3">
        <Button type="submit" size="lg" variant="primary" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </div>
    </Form>
  );
}
