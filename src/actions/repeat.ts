import * as uuidv4 from 'uuid/v4';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import { withActionOutput } from '../utils';

/**
 * Repeat Action. Repeat a set of actions
 *
 * ```js
 * repeat({
 *   count: 10,
 *   actions: [showAlert({}), comment({})]
 * });
 * ```
 */
const repeat = (
  options: {
    /** The integer number of times to loop */
    count?: WFSerialization | number,
    /** The workflow actions inside the repeat block */
    actions?: WFWorkflowAction[],
  },
): WFWorkflowAction[] => {
  const {
    actions = [],
    count = 1,
  } = options;
  const groupingIdentifier = uuidv4();
  return [
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
      WFWorkflowActionParameters: {
        WFRepeatCount: count,
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 0,
      },
    },
    ...actions,
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
      WFWorkflowActionParameters: {
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 2,
      },
    },
  ];
};

export default withActionOutput(repeat);
