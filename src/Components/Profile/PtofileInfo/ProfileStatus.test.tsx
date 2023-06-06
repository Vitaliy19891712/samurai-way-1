import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="status status" />);
    const instance = component.getInstance();
    expect(instance?.props.status).toBe("status status");
  });
  test("after creation span shoulb be displayed with correct status", () => {
    const component = create(<ProfileStatus status="status status" />);
    const root = component.root;
    const span = root?.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation span shoulb be displayed with correct status", () => {
    const component = create(<ProfileStatus status="status status" />);
    const root = component.root;
    const span = root?.findByType("span");
    expect(span.children[0]).toBe("status status");
  });
  test("after creation input shoulb be displayed with correct status", () => {
    const component = create(<ProfileStatus status="status status" />);
    const root = component.root;
    expect(() => {
      const input = root?.findByType("input");
    }).toThrow();
  });
  test("input should be displayed in editmode instead span", () => {
    const component = create(<ProfileStatus status="status status" />);
    const root = component.root;
    const span = root?.findByType("span");
    expect(span).not.toBeNull();
    span.props.onDoubleClick();
    const input = root?.findByType("input");
    expect(input.props.value).toBe("status status");
  });
});
