// Type definitions for react-datepicker 0.48.0
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import * as moment from "moment";

export interface Props {
	allowSameDay?: boolean;
	autoComplete?: string;
	autoFocus?: boolean;
	calendarClassName?: string;
	children?: React.ReactNode;
	className?: string;
	customInput?: React.ReactNode;
	dateFormat?: string | string[];
	dateFormatCalendar?: string;
	disabled?: boolean;
	disabledKeyboardNavigation?: boolean;
	dropdownMode?: 'scroll' | 'select';
	endDate?: moment.Moment;
	excludeDates?: any[];
	filterDate?(): any;
	fixedHeight?: boolean;
	forceShowMonthNavigation?: boolean;
	highlightDates?: any[];
	id?: string;
	includeDates?: any[];
	inline?: boolean;
	isClearable?: boolean;
	locale?: string;
	maxDate?: moment.Moment;
	minDate?: moment.Moment;
	monthsShown?: number;
	name?: string;
	onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
	onChange(date: moment.Moment | null, event: React.SyntheticEvent<any> | undefined): any;
	onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
	onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
	onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
	onMonthChange?(date: moment.Moment): void;
	openToDate?: moment.Moment;
	peekNextMonth?: boolean;
	placeholderText?: string;
	popoverAttachment?: string;
	popoverTargetAttachment?: string;
	popoverTargetOffset?: string;
	readOnly?: boolean;
	renderCalendarTo?: any;
	required?: boolean;
	scrollableYearDropdown?: boolean;
	selected?: moment.Moment | null;
	selectsEnd?: boolean;
	selectsStart?: boolean;
	showMonthDropdown?: boolean;
	showWeekNumbers?: boolean;
	showYearDropdown?: boolean;
	startDate?: moment.Moment;
	tabIndex?: number;
	tetherConstraints?: any[];
	title?: string;
	todayButton?: string;
	utcOffset?: number;
	value?: string;
	withPortal?: boolean;
}

export default class DatePicker extends React.Component<Props, {}> { }

export as namespace DatePicker;
