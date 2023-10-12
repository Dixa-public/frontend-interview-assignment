import Avatar from './index';

import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
  decorators: [
    (Story): JSX.Element => (
      <div style={{ display: 'grid', gridAutoColumns: 45, gap: 8 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    text: {
      type: 'string',
      control: 'text',
    },
    color: {
      type: 'string',
      control: 'color',
    },
    iconKey: {
      type: 'string',
      control: 'text',
    },
    gradientSeed: {
      type: 'string',
      control: 'text',
    },
    imageSrc: {
      type: 'string',
      control: 'text',
    },
    isSmallIcon: {
      type: 'boolean',
      control: 'boolean',
    },
    user: {
      type: 'symbol',
      control: 'object',
    },
  },
};

export default meta;

export const Interactive: Story = {
  args: {
    text: 'JD',
    color: '#5644d8',
  },
};

export const WithIcon: React.FC = () => (
  <>
    <Avatar iconKey="paper-plane" color="#5644D8" />
    <Avatar iconKey="clock" color="#7BC4A9" />
    <Avatar iconKey="cog" color="#18a8d8" />
    <Avatar iconKey="user" color="#c14800" />
  </>
);

export const WithImage: React.FC = () => (
  <>
    <Avatar imageSrc="https://i.pravatar.cc/150?u=john.doe@dixa.com" />
    <Avatar imageSrc="https://i.pravatar.cc/150?u=jane.doe@dixa.com" />
  </>
);

export const WithUser: React.FC = () => (
  <>
    <Avatar
      user={{
        id: '1234-1234-1234-1234',
        avatarUrl:
          'https://dixa-uploads.s3-eu-west-1.amazonaws.com/e7a04fc4-bba8-48a8-a92e-013606a188a6/user_avatar/5b613833-bc48-462b-aa1b-c43b4e6dc928.png',
        name: 'John Doe',
        email: 'email@dixa.com',
        phoneNumber: '+4560860931',
      }}
    />
    <Avatar
      user={{
        id: '1234-1234-1234-1234',
        name: 'John Doe',
        email: 'email@dixa.com',
        phoneNumber: '+4560860931',
      }}
    />
  </>
);

export const WithInitials: React.FC = () => (
  <>
    <Avatar
      user={{
        id: '1234-1234-1234-1234',
        name: 'John',
        email: '',
        phoneNumber: '+4560860931',
      }}
    />
    <Avatar
      user={{
        id: '1234-1234-1234-1234',
        name: '',
        email: '',
        phoneNumber: '+4560860931',
      }}
    />

    <Avatar
      user={{
        id: '1234-1234-1234-1234',
        name: 'John Something',
        email: 'john@gmail.com',
        phoneNumber: '+4560860931',
      }}
    />

    <Avatar
      user={{
        id: '1234-1234-1234-1234',
        name: '',
        email: 'john@gmail.com',
        phoneNumber: '+4560860931',
      }}
    />

    <Avatar
      user={{
        id: '1234-1234-1234-1234',
        name: 'John Something',
        email: '',
        phoneNumber: '+4560860931',
      }}
    />

    <Avatar user={{ id: '1234-1234-1234-1234' }} />

    <Avatar user={null} />
  </>
);

export const WithGradientSeed: React.FC = () => (
  <>
    <Avatar text="KT" gradientSeed="1234-1234-1234-1234" />
    <Avatar text="CC" gradientSeed="5678-5678-5678-5678" />
  </>
);
