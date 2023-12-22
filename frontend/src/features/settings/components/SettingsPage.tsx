import { ContentFrame } from "../../../ui/ContentFrame";

export const SettingsPage = () => {
  return (
    <div className="w-fit mx-auto">
      <ContentFrame>
        <div>
          <div>
            <h2>Change Theme Color</h2>
            <div>
              <ul>
                <li>Green</li>
                <li>Red</li>
                <li>Blue</li>
                <li>Yellow</li>
              </ul>
            </div>
            <div>
              <h2>Password</h2>
              <button>change password</button>
            </div>
            <div>
              <h2>email</h2>
              <button>change email</button>
            </div>
            <div>
              <h2>Name</h2>
              <button>change name</button>
            </div>
          </div>
        </div>
      </ContentFrame>
    </div>
  );
};

/**
 * theme change
 *
 * lang option (ja/sv/de/en)
 *
 * password/name/email
 *
 *
 * delete account
 */
