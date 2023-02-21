package untitled.domain;

import java.util.*;
import lombok.*;
import untitled.domain.*;
import untitled.infra.AbstractEvent;

@Data
@ToString
public class CookFinished extends AbstractEvent {

    private Long id;
    private String orderid;

    public CookFinished(Cooking aggregate) {
        super(aggregate);
    }

    public CookFinished() {
        super();
    }
}
