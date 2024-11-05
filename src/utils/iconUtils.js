// Importing images for status icons
import BacklogIcon from '../assets/icons/Backlog.svg'; 
import TodoIcon from '../assets/icons/No-priority.svg'; 
import InProgressIcon from '../assets/icons/in-progress.svg'; 
import DoneIcon from '../assets/icons/Done.svg'; 
import CanceledIcon from '../assets/icons/Cancelled.svg'; 

// Importing images for priority icons
import NoPriorityIcon from '../assets/icons/No-priority.svg'; 
import UrgentPriorityColorIcon from '../assets/icons/SVG-Urgent_Priority_colour.svg'; 
import HighPriorityIcon from '../assets/icons/Img-High-Priority.svg'; 
import MediumPriorityIcon from '../assets/icons/Img-Medium-Priority.svg'; 
import LowPriorityIcon from '../assets/icons/Img-Low-Priority.svg';

// statusIcons maps various task statuses to specific icons with defined styles.
export const statusIcons = {
  Backlog: <img src={BacklogIcon} alt="Backlog" style={{ width: '24px', height: '24px' }} />, // Backlog status
  Todo: <img src={TodoIcon} alt="To-do" style={{ width: '24px', height: '24px' }} />, // To-do status
  "In progress": <img src={InProgressIcon} alt="In Progress" style={{ width: '24px', height: '24px' }} />, // In-progress status
  Done: <img src={DoneIcon} alt="Done" style={{ width: '24px', height: '24px' }} />, // Done status
  Canceled: <img src={CanceledIcon} alt="Canceled" style={{ width: '24px', height: '24px' }} />, // Canceled status
};

// priorityIcons maps various priority levels to specific icons with defined styles.
export const priorityIcons = {
  "No priority": <img src={NoPriorityIcon} alt="No Priority" style={{ width: '24px', height: '24px' }} />, // No priority
  Urgent: <img src={UrgentPriorityColorIcon} alt="Urgent Priority" style={{ width: '24px', height: '24px' }} />, // Urgent priority
  High: <img src={HighPriorityIcon} alt="High Priority" style={{ width: '24px', height: '24px' }} />, // High priority
  Medium: <img src={MediumPriorityIcon} alt="Medium Priority" style={{ width: '24px', height: '24px' }} />, // Medium priority
  Low: <img src={LowPriorityIcon} alt="Low Priority" style={{ width: '24px', height: '24px' }} />, // Low priority
};
