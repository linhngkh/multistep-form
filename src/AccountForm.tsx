import { FormWrapper } from "./FormWarapper";

type AccountData = {
  email: string;
  password: string;
};
// combine type
type AccountProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({ email, password, updateFields }: AccountProps) {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
