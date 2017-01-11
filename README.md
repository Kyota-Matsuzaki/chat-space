# DB


##messages

belongs_to :user
belongs_to :group

|   column   |    type     | restriction |
|:-----------|:------------|:------------|
|  name      |  text       |             |
|  image     |  string     |             |
|  user_id   |  integer    |  not_null   |
|  group_id  |  integer    |  not_null   |

##users

has_many :messages
has_many :groups, through: user_groups
has_many :user_groups

|   column   |    type     | restriction |
|:-----------|:------------|:------------|
|  body      |  text       |  not_null   |
|  e-mail    |             |             |
|  password  |             |             |

##groups

has_many :messages
has_many :users, through: user_groups
has_many :user_groups

|   column   |    type     | restriction |
|:-----------|:------------|:------------|
|  name      |  text       |  not_null   |

##user_groups

belongs_to :user
belongs_to :group

|   column   |    type     | restriction |
|:-----------|:------------|:------------|
|  user_id   |  references | foreign_key |
|  group_id  |  references | foreign_key |



