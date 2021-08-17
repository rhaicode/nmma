import Select from 'react-select'
import styled from '@emotion/styled'

type ThemedSelectProps = {
  options: { label: string; value: string }[]
  id: string
  isSearchable?: boolean
  defaultValue: { label: string; value: string }
  maxWidthOptions: number
  color?: string
}

const StyledSelect = styled(Select)`
  & {
    /* background-color: #111827 !important; */
    cursor: pointer !important;

    input {
      /* color: white !important; */
    }

    > div:first-of-type {
      border-radius: 10px;
      border-color: #bdc6d9;
      height: 50px;
      cursor: pointer !important;
      > div:first-of-type {
        /* background-color: #111827; */
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        cursor: pointer !important;
        div {
          font-size: 14px;
          color: ${props => props.selectedColor ?? '#989da9'};

          margin-left: 10px;
        }
      }
      > div:nth-of-type(2) {
        > span {
          display: none;
        }
      }
    }
  }
`

type ColourStyleArgs = {
  marginTopAtValueOf: string
  marginBottomAtValueOf: string
  maxWidthOptions: number
  selectedColor: string
}

const colourStyles = ({
  marginTopAtValueOf,
  marginBottomAtValueOf,
  maxWidthOptions,
  selectedColor,
}: ColourStyleArgs) => ({
  option: (styles: any, { data, isSelected, isFocused, isDisabled }: any) => {
    const defaultColor = isFocused ? '#F7F8FB' : 'white'

    return {
      ...styles,
      backgroundColor: isSelected ? '#F7F8FB' : defaultColor,
      color: isSelected ? '#3300CC' : selectedColor,
      fontSize: '14px',
      borderRadius: '10px',
      maxWidth: maxWidthOptions,
      marginLeft: '6px',
      padding: '11px',
      marginTop: marginTopAtValueOf === data.value ? '4px' : '2px',
      marginBottom: marginBottomAtValueOf === data.value ? '4px' : '4px',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? '#F7F8FB' : '#e7e8e9'),
      },
    }
  },
})

const ThemedSelect: React.FC<ThemedSelectProps> = ({
  options,
  id,
  isSearchable,
  defaultValue,
  maxWidthOptions,
  color,
}) => {
  const marginTopAtValueOf = options[0].value
  const marginBottomAtValueOf = options.slice(-1)[0].value
  const selectedColor = color ?? '#989DA9'

  return (
    <StyledSelect
      options={options}
      id={id}
      isSearchable={isSearchable}
      defaultValue={defaultValue}
      styles={colourStyles({
        marginTopAtValueOf,
        marginBottomAtValueOf,
        maxWidthOptions,
        selectedColor,
      })}
      selectedColor={selectedColor}
    />
  )
}

export default ThemedSelect
