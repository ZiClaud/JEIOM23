export default interface MapPopoverProps {
  title: string;
  address: string;
  addressUrl: string;
  imageUrl: string;
  isClicked: boolean;
  onClick: (id: string) => void;
  id :string
}
